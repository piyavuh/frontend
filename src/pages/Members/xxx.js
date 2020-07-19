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
      console.log(resData.data.oneuser._id);
      let requestBodyfarm = {
        query: `
              mutation {
                  createShare(shareInput: {Value: ${Value}, Count: ${Count}, Num_start: ${Num_start}, Date: "${Date}", Share_owner: "${resData.data.oneuser._id}"}) {
                  Value
                  }
              }
            `,
      };
      fetch("http://localhost:8000/graphql", {
        method: "POST",
        body: JSON.stringify(requestBodyfarm),
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
          console.log(resData);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });