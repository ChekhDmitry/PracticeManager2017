function registrationHeadOfPracticeAjaxRequest() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=UTF-8",
        url:"/headOfPracticeRegistration",
        data:JSON.stringify({"login":$('#login_headofpractice').val(),
            "password":$('#password_headofpractice').val(),
            "role":"ROLE_HEADOFPRACTICE",
            "name":$('#name_headofpractice').val()}),
        success: function (data) {


            $('#password_headofpractice').parent().next(".text-danger").remove();
            if(data.password != null) {
                $('#password_headofpractice').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.password + "</p>");
            }

            $('#login_headofpractice').parent().next(".text-danger").remove();
            if(data.login != null) {
                $('#login_headofpractice').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.login + "</p>");
            }

            $('#name_headofpractice').parent().next(".text-danger").remove();
            if(data.name != null) {
                $('#name_headofpractice').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.name + "</p>");
            }

            if(!data){
                alert("Head of practice successfully was registered!");
                window.location.replace("/registration");
            }
        }
    })
}

function registrationStudentAjaxRequest() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=UTF-8",
        url:"/studentRegistration",
        data:JSON.stringify({"login":$('#login_student').val(),
            "password":$('#password_student').val(),
            "role":"ROLE_STUDENT",
            "name":$('#name_student').val(),
            "surname":$('#surname_student').val(),
            "phone":$('#phone_student').val(),
            "email":$('#email_student').val(),
            "facultyId":$('#faculty_name_student').val(),
            "specialityId":$('#speciality_name_student').val(),
            "group":$('#group_student').val(),
            "avrMark":$('#average_mark_student').val(),
            "budget":$("#radio_Form input[type='radio']:checked").val()}),
        success: function (data) {


            $('#password_student').parent().next(".text-danger").remove();
            if(data.password != null) {
                $('#password_student').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.password + "</p>");
            }

            $('#login_student').parent().next(".text-danger").remove();
            if(data.login != null) {
                $('#login_student').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.login + "</p>");
            }

            $('#name_student').parent().next(".text-danger").remove();
            if(data.name != null) {
                $('#name_student').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.name + "</p>");
            }

            $('#surname_student').parent().next(".text-danger").remove();
            if(data.surname != null) {
                $('#surname_student').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.surname + "</p>");
            }

            $('#phone_student').parent().next(".text-danger").remove();
            if(data.phone != null) {
                $('#phone_student').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.phone + "</p>");
            }

            $('#email_student').parent().next(".text-danger").remove();
            if(data.email != null) {
                $('#email_student').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.email + "</p>");
            }

            $('#faculty_name_student').parent().next(".text-danger").remove();
            if(data.facultyId != null) {
                $('#faculty_name_student').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.facultyId + "</p>");
            }

            $('#speciality_name_student').parent().next(".text-danger").remove();
            if(data.specialityId != null) {
                $('#speciality_name_student').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.specialityId + "</p>");
            }

            $('#group_student').parent().next(".text-danger").remove();
            if(data.group != null) {
                $('#group_student').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.group + "</p>");
            }

            $('#average_mark_student').parent().next(".text-danger").remove();
            if(data.avrMark != null) {
                $('#average_mark_student').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.avrMark + "</p>");
            }

            $('#radio_Form').parent().next(".text-danger").remove();
            if(data.budget != null) {
                $('#radio_Form').parent().after("<p class='text-danger'><span class='glyphicon glyphicon-ban-circle'></span> " + data.budget + "</p>");
            }

            if(!data){
                alert("Head of practice successfully was registered!");
                window.location.replace("/registration");
            }

        }
    })
}

/*$('#faculty_name_student').click(function () {
    alert("yes");
    $.ajax({
        url: '/specialityData',
        type: 'POST',
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify({"specialityId":this.value}),
        success: function (data) {
        }
    });
});*/

function getSpecialitiesAjaxRequest() {
    $.ajax({
        url: '/specialityData',
        type: 'POST',
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify({"facultyId":$('#faculty_name_student').val(),
                            "name":$('#faculty_name_student').find("option:selected").text()}),
        success: function (data) {
            $('#speciality_name_student').empty();
            for(var i in data) {
                $('#speciality_name_student')
                    .append($("<option></option>")
                        .attr("value", data[i].id)
                        .text(data[i].name));
            }
        }
    });
}

$(document).ready(function () {
    $.ajax({
        url: '/facultyData',
        type: 'POST',
        contentType: "application/json; charset=UTF-8",
        data: '',
        success: function (data) {
            for(var i in data) {
                $('#faculty_name_student')
                    .append($("<option></option>")
                        .attr("value", data[i].id)
                        .text(data[i].name));
            }
            getSpecialitiesAjaxRequest();
        }
    });
});

