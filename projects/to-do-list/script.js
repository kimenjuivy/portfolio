document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const modal = document.getElementById('taskModal');
    const modalDate = document.getElementById('modalDate');
    const taskList = document.getElementById('taskList');
    const newTaskInput = document.getElementById('newTask');
    const addTaskBtn = document.getElementById('addTask');
    const downloadPDFBtn = document.getElementById('downloadPDF');
    const closeModalBtn = document.getElementById('closeModal');

    let currentDate;
    let tasks = JSON.parse(localStorage.getItem('tasks')) || {};

    function renderCalendar() {
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        calendarEl.innerHTML = '';
        for (let i = 1; i <= daysInMonth; i++) {
            const dayEl = document.createElement('div');
            dayEl.classList.add('calendar-day');
            dayEl.textContent = i;
            dayEl.addEventListener('click', () => openModal(`${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`));
            calendarEl.appendChild(dayEl);
        }
    }

    function openModal(dateStr) {
        currentDate = dateStr;
        modalDate.textContent = new Date(dateStr).toDateString();
        renderTasks();
        modal.style.display = 'block';
    }

    function renderTasks() {
        taskList.innerHTML = '';
        const dateTasks = tasks[currentDate] || [];
        dateTasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = () => deleteTask(index);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    function addTask() {
        const task = newTaskInput.value.trim();
        if (task) {
            if (!tasks[currentDate]) {
                tasks[currentDate] = [];
            }
            if (tasks[currentDate].length < 5) {
                tasks[currentDate].push(task);
                saveTasks();
                renderTasks();
                newTaskInput.value = '';
            } else {
                alert('You can only add up to 5 tasks per day.');
            }
        }
    }

    function deleteTask(index) {
        tasks[currentDate].splice(index, 1);
        saveTasks();
        renderTasks();
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function downloadPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text(`Tasks for ${modalDate.textContent}`, 10, 10);
        const tasksForDate = tasks[currentDate] || [];
        tasksForDate.forEach((task, index) => {
            doc.text(`${index + 1}. ${task}`, 10, 20 + (index * 10));
        });
        doc.save(`tasks_${currentDate}.pdf`);
    }

    renderCalendar();

    addTaskBtn.addEventListener('click', addTask);
    downloadPDFBtn.addEventListener('click', downloadPDF);
    closeModalBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});