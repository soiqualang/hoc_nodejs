module.exports = {
    getAllStudents:function(storage){
        // Lấy sinh viên từ nơi lưu trữ
        var students = storage.getItemSync('students');
        // Nếu không có sinh viên nào thì trả về một mảng rỗng
        if (typeof students === "undefined"){
            return [];
        }
        // Ngược lại sẽ trả về danh sách sinh viên
        return students;
    },
    
    // Hàm lấy chi tiết sinh viên
    getStudent:function(studentId,getAllStudents){
        // Lấy danh sách sinh viên
        var students = getAllStudents();
        // Biến lưu trữ sinh viên được tìm thấy
        var matchedStudent = null;
        // Lặp để tìm sinh viên
        for (var i = 0; i < students.length; i++){
            if (students[i].id === studentId){
                matchedStudent = students[i];
                break;
            }
        }
        return matchedStudent;
    },
    
    // Hàm thêm một sinh viên
    addStudent:function(id, fullname, email,getAllStudents,storage){
        var students = getAllStudents;
        students.push({
            id : id,
            fullname : fullname,
            email : email
        });
        storage.setItemSync('students', students);
    },
    
    // Hàm xóa sinh viên
    //http://saysua.com/2013/10/12/xoa-1-phan-tu-trong-mang-bang-javascript/
    removeStudent:function(studentId,getAllStudents,storage){
        var students = getAllStudents();
        for (var i = 0; i < students.length; i++){
            if (students[i].id === studentId){
                students.splice(i, 1);
            }
        }
        storage.setItemSync('students', students);
    },
    
    // Hàm sửa sinh viên
    editStudent:function(studentId, studentName,getAllStudents,storage){
        var students = getAllStudents();
        for (var i = 0; i < students.length; i++){
            if (students[i].id === studentId){
                students[i].fullname = studentName;
            }
        }
        storage.setItemSync('students', students);
    },
    
    // Hàm hiển thị danh sách sinh viên
    showStudents:function(getAllStudents){
        var students = getAllStudents();
        students.forEach(function(student){
            console.log('Student: ' + student.fullname + ' (' + student.id + ')');
        });
    }
}