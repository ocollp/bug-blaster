export const sortTicket = (tickets, preference) => {
  switch (preference) {
    case "High to Low":
      return [...tickets].sort((a, b) => b.priority - a.priority); // Orden descendente

    case "Low to High":
      return [...tickets].sort((a, b) => a.priority - b.priority); // Orden ascendente

    default:
      return tickets;
  }
};
