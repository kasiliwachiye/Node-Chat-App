$(() => {
    $("#send").click(() => {
        addMessages({
            name: "John",
            message: "Hello"
        });
    });
});

function addMessages(message) {
    $("#messages").append(`<h4>${message.name}</h4> <p>${message.message}</p>`);
}	
