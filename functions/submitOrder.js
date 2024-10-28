// functions/submitOrder.js

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405, // Method Not Allowed
            body: JSON.stringify({ message: 'Method not allowed' }),
        };
    }

    const data = JSON.parse(event.body);

    // Tu możesz przeprowadzić dalsze operacje, np. zapisać dane w bazie
    // lub wysłać e-mail z informacjami o zamówieniu.

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Order received successfully!' }),
    };
};