function status(request, response) {
  response.status(200).json({ chave: "Servidor online" });
}

export default status;
