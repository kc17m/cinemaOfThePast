const cinemaseats = [

    {
        index: "1",
        category: "upperclass",
        price: "15",
        booked: "false"
    },
    {
        index: "2",
        category: "upperclass",
        price: "15",
        booked: "false"
    },
    {
        index: "3",
        category: "upperclass",
        price: "15",
        booked: "false"
    },
    {
        index: "4",
        category: "upperclass",
        price: "15",
        booked: "false"
    },
    {
        index: "5",
        category: "upperclass",
        price: "15",
        booked: "false"
    },
    {
        index: "6",
        category: "upperclass",
        price: "15",
        booked: "false"
    },
    {
        index: "7",
        category: "upperclass",
        price: "15",
        booked: "false"
    },
    {
        index: "8",
        category: "upperclass",
        price: "15",
        booked: "false"
    },
    {
        index: "9",
        category: "upperclass",
        price: "15",
        booked: "false"
    },
    {
        index: "10",
        category: "upperclass",
        price: "15",
        booked: "false"
    },
    {
        index: "11",
        category: "upperclass",
        price: "15",
        booked: "false"
    },
    {
        index: "12",
        category: "upperclass",
        price: "15",
        booked: "false"
    },
    {
        index: "13",
        category: "lowerclass",
        price: "10",
        booked: "false"
    },
    {
        index: "14",
        category: "lowerclass",
        price: "10",
        booked: "false"
    },
    {
        index: "15",
        category: "lowerclass",
        price: "10",
        booked: "false"
    },
    {
        index: "16",
        category: "lowerclass",
        price: "10",
        booked: "false"
    },
    {
        index: "17",
        category: "lowerclass",
        price: "10",
        booked: "false"
    },
    {
        index: "18",
        category: "lowerclass",
        price: "10",
        booked: "false"
    },
    {
        index: "19",
        category: "lowerclass",
        price: "10",
        booked: "false"
    },
    {
        index: "20",
        category: "lowerclass",
        price: "10",
        booked: "false"
    },
    {
        index: "21",
        category: "lowerclass",
        price: "10",
        booked: "false"
    },
    {
        index: "22",
        category: "lowerclass",
        price: "10",
        booked: "false"
    },
    {
        index: "23",
        category: "lowerclass",
        price: "10",
        booked: "false"
    },
    {
        index: "24",
        category: "lowerclass",
        price: "10",
        booked: "false"
    }
]

function SeatsAPI(api_key) {
    if (api_key === "123456") {
        return cinemaseats
    }
    else {
        return {
            statusCode: 400,
            status: "error",
            message: "You must provide a valid api key!"
        }
    }
}


module.exports = SeatsAPI;