// maximum APIs return data in JSON Format --> AJAJ
// returned data should be parsed into js object to get desired output

const url = "https://catfact.ninja/facts";      

const getFact = async() => {
    console.log("Getting Data...");
    let response = await fetch(url);        // return first promise        
    console.log(response);
    let data = await response.json();       // return first promise
    console.log(data.data[0].fact);                      // extracted useable data from response
};


// .json() method parses json format into js object


/*

Because the API at https://catfact.ninja/facts doesn’t return an array directly.

Instead, the JSON looks like this:

{
  "current_page": 1,
  "data": [
    { "fact": "Cats sleep 70% of their lives", "length": 33 },
    { "fact": "A group of cats is called a clowder", "length": 39 },
    ...
  ],
  "first_page_url": "https://catfact.ninja/facts?page=1",
  ...
}

Notice the facts are inside a data property, not at the root.
That means data is an object, not an array.

To get the 3rd fact, you need:
__________________________________
console.log(data.data[2].fact);  |
---------------------------------|
_______________________________________________
Uncaught ReferenceError: data is not defined

That happens when you typed data[0] directly in the console.
data only exists inside your function (getFact), not globally.
When the function ends, its variables are gone.

*/