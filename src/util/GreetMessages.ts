const messages: string[] = [
    "In Polyakov we trust",
    "Первый нетрадиционный",
    "Научно-образовательная корпорация",
    "Кубы кубы кубики...",
    "В прекрасном городе на Неве",
    "🅰️🅱️🅾️🅱️🅰️"
]

const getMessage = () => messages[Math.floor(messages.length * Math.random())];

export default getMessage;