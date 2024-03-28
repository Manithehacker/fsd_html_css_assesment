let arr = `[
	{
        "name": "Aleix Melon",
        "id": "E00245",
        "role": ["Dev", "DBA"],
        "age": 23,
        "doj": "11-12-2019",
        "married": false,
        "address": {
            "street": "32, Laham St.",
            "city": "Innsbruck",
            "country": "Austria"
            },
        "referred": "E0012"
	},
    {
        "name": "Bob Washington",
        "id": "E01245",
        "role": ["HR"],
        "age": 43,
        "doj": "10-06-2010",
        "married": true,
        "address": {
            "street": "45, Abraham Lane.",
            "city": "Washington",
            "country": "USA"
            },
        "referred": null
	}
]
`;

let test = JSON.parse(arr);
document.getElementById("test").innerHTML=(
  test.map((ele) => {
    return `name:${ele.name}<br>id:${ele.id}<br>role:${ele.role}<br>age:${ele.age}<br>doj:${ele.doj}<br>married${ele.married}<br>address${ele.address.street}<br>${ele.referred}<br>`;
  })
);
