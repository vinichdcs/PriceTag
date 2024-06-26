# Price Tag
### Descrição
O Price Tag é uma aplicação que permite o cadastro de produtos de supermercado, facilitando a comparação de preços entre diferentes estabelecimentos. O projeto oferece funcionalidades para cadastrar produtos, incluindo informações como valor, nome e endereço do comércio, categoria do produto, marca, unidade de medida (kg ou L), e valor do produto.
## Objetivo
O objetivo da aplicação é fornecer aos usuários uma ferramenta prática e eficiente para registrar e comparar os preços de produtos de supermercados. Com o Price Tag, os usuários podem:

       •	Economizar dinheiro ao identificar os estabelecimentos com os melhores preços.

       •	Manter um registro organizado dos preços dos produtos em diferentes lojas.

       •	Facilitar o planejamento de compras, permitindo decisões informadas sobre onde comprar produtos específicos.

## Instalação
Para configurar e rodar o projeto, utilize o Snack Expo tanto no computador quanto no celular para verificação em tempo real. As dependências a serem instaladas são as seguintes:

  "firebase": "8.3.2"
  
  "firebase/app": "*"
  
  "@firebase/app": "0.x.0"
  
  "firebase/auth": "*"
  
  "@firebase/auth": "*"
  
  "firebase/database": "*"
  
  "@expo/vector-icons": "^14.0.0"
  
  "react-native-paper": "4.9.2"
  
  "react-native-screens": "~3.29.0"
  
  "@react-navigation/stack": "*"
  
  "react-native-reanimated": "~3.6.2"
  
  "@react-navigation/drawer": "*"
  
  "@react-navigation/native": "*"
  
  "react-native-masked-text": "*"
  
  "@react-native-firebase/app": "19.1.0"
  
  "@react-native-firebase/auth": "19.1.1"
  
  "react-native-gesture-handler": "~2.14.0"
  
  "react-native-safe-area-context": "4.8.2"
  
  "@react-native-firebase/firestore": "*"
  
  "@react-native-community/datetimepicker": "7.6.1"
  
  "@react-native-async-storage/async-storage": "1.21.0"


  #### Para instalar essas dependências, siga os passos abaixo:

  1-	Clone o repositório do projeto.

  2-	Abra o projeto no Snack Expo.

  3-	Adicione as dependências mencionadas acima no arquivo de configurações do Snack Expo.


  ## Uso

  O aplicativo é intuitivo e fácil de utilizar. Na tela inicial, há opções para login e senha, além de uma opção para novo cadastro. Após o login, o usuário será levado a uma tela onde poderá cadastrar novos produtos, visualizar os produtos cadastrados e comparar preços entre diferentes mercadorias e estabelecimentos.



 ![image](https://github.com/vinichdcs/PriceTag/assets/126787332/76e66512-6877-4616-bca3-68bc9bf25a0a)


 ![image](https://github.com/vinichdcs/PriceTag/assets/126787332/8c3880b0-2f7f-4b83-a758-6c191b1a318b)


![imagem readme_page-0001 (1)](https://github.com/vinichdcs/PriceTag/assets/126787332/0df1f560-f4a1-4f30-84a7-99b9f646a240)



 ![image](https://github.com/vinichdcs/PriceTag/assets/126787332/7deb3e5c-a63a-417c-a182-17b55599d126)


 ![image](https://github.com/vinichdcs/PriceTag/assets/126787332/90d48e50-40f9-4a21-b1d2-9d2de411de34)



## Tecnologias Utilizadas

### Linguagem de Programação: JavaScript
### Frameworks e Bibliotecas:

•	React

•	React Native

•	Firebase e Firebase auth (para armazenamento de dados e autenticação dos usuários)

•	Snack Expo (para desenvolvimento e teste em tempo real)


## Requisitos de Sistema
### Hardware

•	Processador: x86_64 (Intel ou AMD)

•	RAM: Pelo menos 8 GB de RAM (16 GB recomendado para melhor desempenho)

•	Espaço em Disco: Pelo menos 10 GB de espaço livre (mais pode ser necessário dependendo do tamanho do projeto e dos arquivos baixados)
Sistema Operacional

•	macOS: Recomendado para desenvolvimento iOS e Android, necessário se você quiser compilar e testar no simulador iOS.

•	Windows: Suportado para desenvolvimento Android.

•	Linux: Suportado para desenvolvimento Android.


## Contribuição

Sinta-se à vontade para contribuir com este projeto. Para isso:

1.	Faça um fork deste repositório.
   
2.	Crie uma branch para sua feature (git checkout -b feature/nova-feature).
	
3.	Faça commit das suas alterações (git commit -am 'Adiciona nova feature').
	
4.	Faça push para a branch (git push origin feature/nova-feature).
	
5.	Abra um Pull Request.


## Princípios de Código Limpo

1. Nomeação Clara e Significativa

Objetivo: nomes descritivos para variáveis, funções, componentes, e outros elementos do código.

2. Funções Pequenas e Focadas

Objetivo: Manter as funções pequenas e focadas em uma única responsabilidade.

3. Comentários Relevantes

Objetivo: Comentar onde o código pode ser difícil de entender, evitando comentários óbvios ou redundantes.

4. Organização e Estrutura

Objetivo: Estruture o código de maneira lógica e consistente.

5. Evitar Código Duplicado

Objetivo: Reutilizar código sempre que possível para evitar duplicação.



## Teste de Renderização

Um teste básico para verificar se a tela de produtos é renderizada corretamente.
### Mock de Firebase
Para testar a interação com o Firebase, crie mocks para as funções do Firebase usadas no componente.

### Teste de Carregamento de Produtos
Vamos criar um teste para verificar se os produtos são carregados corretamente.

### Teste de Exclusão de Produto
Vamos adicionar um teste para verificar se um produto pode ser excluído corretamente.

### Teste de Alteração de Produto
E um teste para verificar se um produto pode ser alterado corretamente.


## Observer

O uso de useEffect e useState no componente TelaProdutos.js com Firebase é um exemplo claro do padrão Observer em ação. Esse padrão melhora a reatividade e a capacidade de manutenção do código, garantindo que a interface do usuário esteja sempre sincronizada com o estado atual dos dados.




## Autor

### Vinícius Sanches

  

 
   





