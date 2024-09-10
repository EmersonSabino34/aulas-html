<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="group-btn">
        <button onclick="fn__entrar()"    id="entrar">Entrar</button>
        <button onclick="fn__cadastrar()" id="cadastrar">Cadastrar</button>
    </div>
    <main>
        <div id="box-entrar"  class="hide">

        </div>
        
        <div id="box-cadastrar" class="hide">
            
        </div>
    </main>

    <style>
        body{
            justify-content: center;
            flex-direction: column;
            align-items: center;
            display: flex;
            height: 100vh;
        }
        .show{ display: block; }
        .hide{ display: none; }
        .entrar{
            width: 100%;
            height: 50vh;
            display: block;
            background-color: blueviolet;
        }
        .selecionado{
            color: white;
            background-color: blueviolet;
        }
        .cadastrar {
            width: 100%;
            height: 50vh;
            display: block;
            background-color: brown;
        }
        main{
            width: 60%;
            height: 70vh;

            margin-top: 10px;
            border-radius: 15px;
        }
        button{
            border: 0;
            width: 100px;
            height: 30px;
            cursor: pointer;
            border-radius: 7px;
        }
        button:hover{
            color: white;
            font-weight: bold;
            background-color: blueviolet;
        }
    </style>

    <script>
        var btn__entrar = document.querySelector("#entrar");
        var btn__cadastrar = document.querySelector("#cadastrar");

        function fn__entrar() {
            var element = document.getElementById("box-entrar");
            element.classList.toggle("entrar");
            document.getElementById("entrar").setAttribute("class", "selecionado")
        }

        function fn__cadastrar() {
            var element = document.getElementById("box-cadastrar");
            element.classList.toggle("cadastrar");
            document.getElementById("cadastrar").setAttribute("class", "selecionado")
        }
    </script>
</body>
</html>
