##  Comandos importantes

### Criação de chave com tempo de expiração (caching)
Para criar uma ***chave*** com tempo de expiração, devemos sempre adicionar o comando `ex` após a declaração da chave. Ex: ***`set <nome-da-chave> <valor> ex <tempo em segundos>`***.

### Verificação de expiração de uma determinada chave
Para verificar o tempo de expiração de uma determinada chave, basta acionar o comando ***`ttl <nome-da-chave>`***. 