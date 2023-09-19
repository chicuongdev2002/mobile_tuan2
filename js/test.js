//const urlBacon = "https://baconipsum.com/api/?type=all-meat";
// const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";
// (function() {
//     $.ajax({
//             method: "GET",
//             url: urlBacon,
//             dataType: "json"
//         })
//         .done(function(data) {
//             console.log(data);
//         })
//         .fail(function() {
//             alert("no good");
//         });
// })()
// ////////////////////////////////////
// $.ajax({
//         url: "https://jsonplaceholder.typicode.com/todos/1",
//         beforeSend: function(xhr) {
//             xhr.overrideMimeType("text/plain; charset=x-user-defined");
//         }
//     })
//     .done(function(data) {
//         if (console && console.log) {
//             console.log("Sample of data:", data.slice(0, 100));
//         }
//     });
///////////////////////////////////////
// console.log("Get all users")
//     //Get all users
// var url = "https://reqres.in/api/users/2";
// //var url = 'https://jsonplaceholder.typicode.com/todos';
// var xhr = new XMLHttpRequest()
// xhr.open('GET', url, true)
// xhr.onload = function() {
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send(null);
//////////////////////////////////////
//console.log("Post a user")
// // Post a user
// var url = "https://reqres.in/api/users";
// //var url = 'https://my-json-server.typicode.com/typicode/demo/posts';    
// var data = {};

// data.name = "Nguyễn Chí Cường";
// data.job = "Dev";
// var json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// xhr.onload = function() {
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "201") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send(json);
//////////////////////////////////////
// console.log("update a user")
//     // Update a user
// var url = "https://reqres.in/api/users/2";

// var data = {};
// data.name = "Nguyễn Chí Cường";
// data.job = "Sinh Vien";
// var json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();
// xhr.open("PUT", url + '/12', true);
// xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// xhr.onload = function() {
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send(json);
// console.log("delete a user")
//     // Delete a user
// var url = "https://reqres.in/api/users/2";
// var xhr = new XMLHttpRequest();
// xhr.open("DELETE", url + '/2', true);
// xhr.onload = function() {
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
//xhr.send(null);
//How to crete a promise
var f = function(relsolve, reject) {
    relsolve();
    reject();
}
var promise = new Promise(f);
// promise
//     .then(
//         function() {
//             console.log('Successful!');
//         }
//     )
//     .catch(
//         function() {
//             console.log('UnSuccessful!');
//         }
//     )
//     .finally(
//         function() {
//             console.log('Finally!');
//         }
//     );
// promise
//     .then(
//         function() {
//             console.log('1!');
//         }
//     )
//     .then(
//         function() {
//             console.log('2!');
//         }
//     )
//     .then(
//         function() {
//             console.log('3!');
//         }
//     )
// promise
//     .then(
//         function() {
//             return new Promise(function(resolve) {
//                 setTimeout(resolve, 3000);
//             });
//         }
//     )
//     .then(
//         function(data) {
//             console.log(data);
//             return 3;
//         }
//     )
//     .then(
//         function(data) {
//             console.log(data);
//             return 2;
//         }
//     )
//     .then(
//         function(data) {
//             console.log(data);
//             return 1;
//         }
//     )
//     .then(
//         function(data) {
//             console.log(data);
//         }
//     )
//Get Fetch
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(
//         (data) => {
//             var htmls = data.map(
//                 function(posts) {
//                     return `<li> 
//                                         <h2>${posts.id}</h2>
//                                         <h2>${posts.title}</h2>
//                                         </li>`
//                 }
//             );
//             var html = htmls.join();
//             var text = document.getElementById('info').innerHTML = html;
//         }
//     )
//     .catch(() => console.log('Có lỗi!'))
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//Post Fetch
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify({
//             id: 1,
//             title: 'NguyenChiCuong_20020331',
//             body: 'abc',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//Update Fetch
// fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: '20020331_NguyenChiCuong',
//             body: 'xyz',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//DELETE Fetch
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
// });
// axios({
//         method: 'get',
//         url: 'https://reqres.in/api/users/2',

//     })
//     .then(function(response) {
//         console.log(response);
//     });
// axios({
//         method: 'post',
//         url: 'https://reqres.in/api/users',

//     })
//     .then(function(response) {
//         console.log(response);
//     });

// axios.put('https://reqres.in/api/users/2', {
//         name: "morpheus",
//         job: "zion resident",
//     })
//     .then((response) => {
//         console.log(response.data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// axios({
//         method: 'delete',
//         url: 'https://reqres.in/api/users',

//     })
//     .then(function(response) {
//         console.log(response);
//     });
///////////////////////////////
function httpGetAsync(Url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200)
            callback(xmlHttp);
    };
    xmlHttp.open('GET', Url, true);
    xmlHttp.send(null);
}
httpGetAsync("https://picsum.photos/200/300", (data) => {
    console.log("1", data);
    document.getElementById("img_1").setAttribute("src", data.responseURL);

    httpGetAsync("https://picsum.photos/200/300", (data) => {
        console.log("2", data);
        document.getElementById("img_2").setAttribute("src", data.responseURL);

        httpGetAsync("https://picsum.photos/200/300", (data) => {
            console.log("3", data);
            document.getElementById("img_3").setAttribute("src", data.responseURL);
        });
    });
});
const myPromise1 = new Promise(function(relsolve, reject) {
    httpGetAsync('https://picsum.photos/200/300', relsolve);
});
const myPromise2 = new Promise(function(relsolve, reject) {
    httpGetAsync('https://picsum.photos/200/300', relsolve);
});
const myPromise3 = new Promise(function(relsolve, reject) {
    httpGetAsync('https://picsum.photos/200/300', relsolve);
});
myPromise1
    .then((data) => {
        document.getElementById('img_1').setAttribute('src', data.responseURL);
        return myPromise2;
    })
    .then((data) => {
        document.getElementById('img_2').setAttribute('src', data.responseURL);
        return myPromise3;
    })
    .then(
        (data) => {
            document.getElementById('img_3').setAttribute('src', data.responseURL);
        })