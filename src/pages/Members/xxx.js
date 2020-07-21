const requestBodyquery = {
    query: `
                query{
                  oneuser(Username: "${First_name}") {
                    _id
                  }
                }
                `,
  };
  fetch("http://localhost:8000/graphql", {
    method: "POST",
    body: JSON.stringify(requestBodyquery),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error("Failed!");
      }
      return res.json();
    })
    .then((resData) => {
      
    })
    .catch((err) => {
      console.log(err);
    });