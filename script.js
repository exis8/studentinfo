document.addEventListener('DOMContentLoaded', function() {
    const studentForm = document.getElementById('studentForm');
    const studentTableBody = document.getElementById('studentTableBody');
    const searchName = document.getElementById('searchName');
// Sample initial data
    let students = [
        {
            "Student ID": "BP-113-00001",
            "Full Name": "Chelsea Greer",
            "Gender": "Female",
            "Gmail": "chelseagreer@gmail.com",
            "Program": "BS Physics",
            "Year Level": "5th Year",
            "University": "Caraga State University - Cabadbaran Campus"
        },
        {
            "Student ID": "BM-113-00002",
            "Full Name": "Nicolas Medina",
            "Gender": "Male",
            "Gmail": "nicolasmedina@gmail.com",
            "Program": "BS Mathematics",
            "Year Level": "5th Year",
            "University": "Caraga State University - Main Campus"
        },
        {
            "Student ID": "BM-113-00003",
            "Full Name": "Maureen Palmer",
            "Gender": "Female",
            "Gmail": "maureenpalmer@gmail.com",
            "Program": "BS Mathematics",
            "Year Level": "4th Year",
            "University": "Caraga State University - Cabadbaran Campus"
        },
        {
            "Student ID": "BG-113-00004",
            "Full Name": "David Wilson",
            "Gender": "Male",
            "Gmail": "davidwilson@gmail.com",
            "Program": "BS Geology",
            "Year Level": "3rd Year",
            "University": "Caraga State University - Main Campus"
        },
        {
            "Student ID": "BCE-113-00005",
            "Full Name": "Sarah Johnson",
            "Gender": "Female",
            "Gmail": "sarahjohnson@gmail.com",
            "Program": "BS Civil Engineering",
            "Year Level": "2nd Year",
            "University": "Caraga State University - Cabadbaran Campus"
        },
        {
            "Student ID": "BACC-113-00006",
            "Full Name": "Michael Brown",
            "Gender": "Male",
            "Gmail": "michaelbrown@gmail.com",
            "Program": "BS Accountancy",
            "Year Level": "1st Year",
            "University": "Caraga State University - Main Campus"
        },
        {
            "Student ID": "BCS-113-00007",
            "Full Name": "Emily Davis",
            "Gender": "Female",
            "Gmail": "emilydavis@gmail.com",
            "Program": "BS Computer Science",
            "Year Level": "4th Year",
            "University": "Caraga State University - Cabadbaran Campus"
        },
        {
            "Student ID": "BIS-113-00008",
            "Full Name": "Daniel Lee",
            "Gender": "Male",
            "Gmail": "daniellee@gmail.com",
            "Program": "BS Information Systems",
            "Year Level": "3rd Year",
            "University": "Caraga State University - Main Campus"
        },
        {
            "Student ID": "BTOUR-113-00009",
            "Full Name": "Sophia Martinez",
            "Gender": "Female",
            "Gmail": "sophiamartinez@gmail.com",
            "Program": "BS Tourism Management",
            "Year Level": "2nd Year",
            "University": "Caraga State University - Cabadbaran Campus"
        },
        {
            "Student ID": "BEE-113-00010",
            "Full Name": "James Anderson",
            "Gender": "Male",
            "Gmail": "jamesanderson@gmail.com",
            "Program": "BS Electrical Engineering",
            "Year Level": "4th Year",
            "University": "Caraga State University - Main Campus"
        },
        {
            "Student ID": "BPSY-113-00011",
            "Full Name": "Olivia White",
            "Gender": "Female",
            "Gmail": "oliviawhite@gmail.com",
            "Program": "BS Psychology",
            "Year Level": "3rd Year",
            "University": "Caraga State University - Cabadbaran Campus"
        },
        {
            "Student ID": "BCHEM-113-00012",
            "Full Name": "Robert Taylor",
            "Gender": "Male",
            "Gmail": "roberttaylor@gmail.com",
            "Program": "BS Chemistry",
            "Year Level": "2nd Year",
            "University": "Caraga State University - Main Campus"
        },
        {
            "Student ID": "BBIO-113-00013",
            "Full Name": "Emma Garcia",
            "Gender": "Female",
            "Gmail": "emmagarcia@gmail.com",
            "Program": "BS Biology",
            "Year Level": "1st Year",
            "University": "Caraga State University - Cabadbaran Campus"
        },
        {
            "Student ID": "BFOR-113-00014",
            "Full Name": "William Rodriguez",
            "Gender": "Male",
            "Gmail": "williamrodriguez@gmail.com",
            "Program": "BS Forestry",
            "Year Level": "5th Year",
            "University": "Caraga State University - Main Campus"
        },
        {
            "Student ID": "BIS-113-00015",
            "Full Name": "Ava Hernandez",
            "Gender": "Female",
            "Gmail": "avahernandez@gmail.com",
            "Program": "BS Information Systems",
            "Year Level": "2nd Year",
            "University": "Caraga State University - Cabadbaran Campus"
        },
        {
            "Student ID": "BTOUR-113-00016",
            "Full Name": "Ethan Lopez",
            "Gender": "Male",
            "Gmail": "ethanlopez@gmail.com",
            "Program": "BS Tourism Management",
            "Year Level": "3rd Year",
            "University": "Caraga State University - Main Campus"
        },
        {
            "Student ID": "BEE-113-00017",
            "Full Name": "Mia Gonzalez",
            "Gender": "Female",
            "Gmail": "miagonzalez@gmail.com",
            "Program": "BS Electrical Engineering",
            "Year Level": "1st Year",
            "University": "Caraga State University - Cabadbaran Campus"
        },
        {
            "Student ID": "BPSY-113-00018",
            "Full Name": "Noah Perez",
            "Gender": "Male",
            "Gmail": "noahperez@gmail.com",
            "Program": "BS Psychology",
            "Year Level": "4th Year",
            "University": "Caraga State University - Main Campus"
        },
        {
            "Student ID": "BCHEM-113-00019",
            "Full Name": "Charlotte Flores",
            "Gender": "Female",
            "Gmail": "charlotteflores@gmail.com",
            "Program": "BS Chemistry",
            "Year Level": "5th Year",
            "University": "Caraga State University - Cabadbaran Campus"
        },
        {
            "Student ID": "BBIO-113-00020",
            "Full Name": "Benjamin Scott",
            "Gender": "Male",
            "Gmail": "benjaminscott@gmail.com",
            "Program": "BS Biology",
            "Year Level": "3rd Year",
            "University": "Caraga State University - Main Campus"
        }
];

    // Render students table
    function renderStudents() {
        studentTableBody.innerHTML = '';
        const nameSearch = searchName.value.toLowerCase();
        
        const filteredStudents = students.filter(student => {
            return student['Full Name'].toLowerCase().includes(nameSearch);
        });
filteredStudents.forEach(student => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">${student['Student ID']}</td>
                <td class="px-6 py-4 whitespace-nowrap">${student['Full Name']}</td>
                <td class="px-6 py-4 whitespace-nowrap">${student['Gender']}</td>
                <td class="px-6 py-4 whitespace-nowrap">${student['Program']}</td>
                <td class="px-6 py-4 whitespace-nowrap">${student['Year Level']}</td>
                <td class="px-6 py-4 whitespace-nowrap">${student['University']}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <button class="text-red-600 hover:text-red-900 delete-btn" data-id="${student['Student ID']}">Delete</button>
                </td>
            `;
            
            studentTableBody.appendChild(row);
        });

        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                const studentId = this.getAttribute('data-id');
                deleteStudent(studentId);
            });
        });
    }

    // Add new student
    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newStudent = {
            "Student ID": document.getElementById('studentId').value,
            "Full Name": document.getElementById('fullName').value,
            "Gender": document.getElementById('gender').value,
            "Gmail": document.getElementById('gmail').value,
            "Program": document.getElementById('program').value,
            "Year Level": document.getElementById('yearLevel').value,
            "University": document.getElementById('university').value
        };
        students.push(newStudent);
        renderStudents();
        studentForm.reset();
        showToast('Student added successfully!', 'success');
});

    // Delete student
    function deleteStudent(studentId) {
        students = students.filter(student => student['Student ID'] !== studentId);
        renderStudents();
    }
    // Search event listener
    searchName.addEventListener('input', renderStudents);
    // Toast notification function
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg text-white ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 
            'bg-blue-500'
        }`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('opacity-0', 'transition-opacity', 'duration-300');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Initial render
    renderStudents();
});