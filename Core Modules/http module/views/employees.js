let employees=fetch("http://localhost:5000/");

employees.then(data=>
    {
        return data.json();
    }).then(emps=>
        {
            console.log(emps);
           let employee=document.getElementById("employee");
            for (const emp of emps) {
                employee.innerHTML+=`
                <h1>${emp.ename}</h1>
                <img src=${emp.img_url} width="200px" height="200px">
                <h1>${emp.Salary}</h1>
                `
            }
        })