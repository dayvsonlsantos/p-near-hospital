![LineLumos](https://user-images.githubusercontent.com/102249811/184333446-af70cbe1-6a10-4a60-b529-7a764871b8dd.png)

<h4 align="center"> 
	• NearHospital 🤝 Em Desenvolvimento •
</h4>

<p align="center">
 <a href="#-Sobre">Sobre</a> •
 <a href="#-Funcionalidades">Funcionalidades</a> •
 <a href="#-Modelo-de-Desenvolvimento">Modelo de Desenvolvimento</a> • 
 <a href="#-Tecnologias">Tecnologias</a> • 
 <a href="#-Design">Design</a> • 
 <a href="#-Autores">Autores</a> • 
 <a href="#-Licença">Licença</a>
</p>


## ![link](https://user-images.githubusercontent.com/102249811/184334676-ed902c74-e1fc-44a8-828b-4c3eb1490767.png) Sobre

NearHospital, é uma aplicação mobile que tem como interesse ajudar você a encontrar aquele hospital ou clínica que tanto procura, sempre com o foco em conectar quem precisa com quem sabe fazer.

Projeto desenvolvido durante a faculdade de ADS, na faculdade Senac, para conclusão da cadeira de **Mobile**.

## Instalação

```bash
$ npm install
```

## Iniciar o Aplicativo

Renomear o arquivo '.env.example' para '.env'

```bash
$ npm start
```

## ![link](https://user-images.githubusercontent.com/102249811/184334676-ed902c74-e1fc-44a8-828b-4c3eb1490767.png) Funcionalidades

- [x] Ao abrir a aplicação em um dispositivo mobile e aceitar o uso da localização, o usuário poderá:
	  
   - [x] navegar pela tela inicial da plataforma, visualizando o mapa e sua localização.
   - [x] realizar o seu cadastro / login no aplicativo; 
 
   - [x] Para realizar o cadastro na plataforma, será preciso informar: 
   
      - [x] nome completo;
      - [x] email;
      - [x] senha;
      - [x] confirmação de senha;
      
   - [x] logar-se com o email e senha cadastrados

- [x] Os usuários logados, podem:

  - [x] acessar seu perfil, realizando a edição dos dados.

## ![link](https://user-images.githubusercontent.com/102249811/184334676-ed902c74-e1fc-44a8-828b-4c3eb1490767.png) Tecnologias

#### **Website**  
-   **[React Native](https://reactnative.dev/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Fetch](https://github.com/allaboutapps/Fetch)**
-   **[Vector Icons](https://github.com/expo/vector-icons)**
-   **[Async Storage](https://docs.expo.dev/versions/latest/sdk/async-storage/)**
-   **[Navigation](https://reactnavigation.org/)**
-   **[Expo](https://expo.dev/)**   
-   **[NativeWind](https://www.nativewind.dev/)**
-   **[React Native Maps](https://github.com/react-native-maps/react-native-maps)**   
-   **[React Native Maps Directions](https://github.com/bramus/react-native-maps-directions)**   
-   **[React Native Settings](https://www.npmjs.com/package/react-native-settings)**   
-   **[React Native SVG](https://github.com/software-mansion/react-native-svg/blob/main/USAGE.md)**   
-   **[React Native Dotenv](https://github.com/zetachang/react-native-dotenv)**   


> Veja o arquivo  [package.json](https://github.com/dayvsonlsantos/p-near-hospital/blob/main/near-hospital-front/package.json)


#### **Server**  ([Node.js](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Mongodb](https://www.mongodb.com/)**
-   **[Mongoose](https://mongoosejs.com/)**
-   **[Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**
-   **[Bcrypt](https://www.npmjs.com/package/bcrypt)**
-   **[dotENV](https://github.com/motdotla/dotenv)**

> Veja o arquivo  [package.json](https://github.com/dayvsonlsantos/p-near-hospital/blob/main/near-hospital-back/package.json)


#### []()**Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo (NearHospital)](https://www.figma.com/proto/woKFfWRBMESifDzbS9bgx0/NearHospital?page-id=0%3A1&type=design&node-id=2-390&viewport=1104%2C518%2C0.32&t=QnxtsH7Gbvq30bca-1&scaling=scale-down&starting-point-node-id=2%3A390&mode=design)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Teste de API:  **[Postman](https://www.postman.com/)**

## ![link](https://user-images.githubusercontent.com/102249811/184334676-ed902c74-e1fc-44a8-828b-4c3eb1490767.png) Design


### Mobile

<div style="display: inline;">
	<img alt="" src='https://github.com/dayvsonlsantos/p-near-hospital/assets/102249811/049b1cd2-80fc-44fc-a189-5dc777dc76f7' style="width: 30%">
	<img alt="" src='https://github.com/dayvsonlsantos/p-near-hospital/assets/102249811/5ba79a4b-f122-4810-a68e-e06cb30d8f05' style="width: 30%">
</div>

<div style="display: inline;">
	<img alt="" src='https://github.com/dayvsonlsantos/p-near-hospital/assets/102249811/fd8a762a-3329-45f4-8453-f4cbd2357d02' style="width: 30%">
	<img alt="" src='https://github.com/dayvsonlsantos/p-near-hospital/assets/102249811/4c36766e-2ce8-4d1f-a434-0fbfcbe698ee' style="width: 30%">	
</div>

## ![link](https://user-images.githubusercontent.com/102249811/184334676-ed902c74-e1fc-44a8-828b-4c3eb1490767.png) Autores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/dayvsonlsantos">
        <img alt="" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102249811?s=400&u=2843e9ff654eb5587f9e6ad6b873fed0b1c0df77&v=4" width="100px;" alt=""/>
        <br />
        <sub><b>Dayvson Lima</b></sub>
   </td>
   
   <td align="center">
      <a href="#">
        <img alt="" style="border-radius: 50%;" src="https://github.com/dayvsonlsantos/p-near-hospital/assets/102249811/a01154cd-50fb-4cad-96e9-c74a1276586b" width="100px;" alt=""/>
        <br />
        <sub><b>Daniel Oliveira</b></sub>
   </td>
   
   <td align="center">
      <a href="#">
        <img alt="" style="border-radius: 50%;" src="https://github.com/dayvsonlsantos/p-near-hospital/assets/102249811/9a9cf70a-7e7b-49b3-9ce1-2cde7671b488" width="100px;" alt=""/>
        <br />
        <sub><b>Reginaldo Alves</b></sub>
   </td>

   <td align="center">
      <a href="#">
        <img alt="" style="border-radius: 50%;" src="https://github.com/dayvsonlsantos/p-near-hospital/assets/102249811/25c7072b-0deb-4f4e-aec4-5253cba93dd4" width="100px;" alt=""/>
        <br />
        <sub><b>Natan Gonçalves</b></sub>
   </td>
   
   <td align="center">
      <a href="#">
        <img alt="" style="border-radius: 50%;" src="https://github.com/dayvsonlsantos/p-near-hospital/assets/102249811/6a860502-91ce-4ff2-8648-56245363c7ba" width="100px;" alt=""/>
        <br />
        <sub><b>Victor Lucas</b></sub>
   </td>
   
 </tr>
   
</table>


## ![link](https://user-images.githubusercontent.com/102249811/184334676-ed902c74-e1fc-44a8-828b-4c3eb1490767.png) Licença

O projeto se encontra sob a licença [GPLv3](https://github.com/dayvsonlsantos/p-near-hospital/blob/main/near-hospital-back/license.md).

Desenvolvido pela equipe NearHospital.

![Line](https://user-images.githubusercontent.com/102249811/184343333-e5ebb9aa-14ea-4f00-87d2-9cf88faf05a5.png)
