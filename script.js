function problema1(){
	const str = [" h3ll0 w0rld", " w3b d3v3l0p3r ", "0tterw1s3", "j4v4scr1pt "];
	tamvet = str.length;
	var palavra;
	for(var i = 0; i < tamvet; i++){
		palavra = str[i];
		palavra = palavra.trim();
		tamstr = palavra.length;
		for (var j = 0; j < tamstr; j++) {
			if(palavra[j] == '0'){
				palavra = palavra.replace(/0/g,'o');
			}
			if(palavra[j] == '1'){
				palavra = palavra.replace(/1/g,'i');
			}
			if(palavra[j] == '3'){
				palavra = palavra.replace(/3/g,'e');
			}
			if(palavra[j] == '4'){
				palavra = palavra.replace(/4/g,'a');
			}
			if(palavra[j] == '5'){
				palavra = palavra.replace(/5/g,'s');
			}
		}
		str[i] = palavra;
	}
	document.getElementById("array").innerHTML = str;
	console.log(str);
}


function ordenaIdadeCrescente(){
	const pessoas = [{ id:1, nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
					 { id:2, nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
					 { id:3, nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
					 { id:4, nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
					 { id:5, nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
					 { id:6, nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
					 { id:7, nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" }];
    pessoas.sort(function compare(a,b){
    	if(a.idade<b.idade) return -1;
    	if(a.idade>b.idade) return 1;
    	return 0;
    })
	console.log(pessoas);
}

function ordenaIdadeDecrescente(){
	const pessoas = [{ id:1, nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
					 { id:2, nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
					 { id:3, nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
					 { id:4, nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
					 { id:5, nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
					 { id:6, nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
					 { id:7, nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" }];
    pessoas.sort(function compare(a,b){
    	if(a.idade>b.idade) return -1;
    	if(a.idade<b.idade) return 1;
    	return 0;
    })
	console.log(pessoas);
}

function filtrar(){
	const pessoas = [{ id:1, nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
					 { id:2, nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
					 { id:3, nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
					 { id:4, nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
					 { id:5, nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
					 { id:6, nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
					 { id:7, nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" }];
	var select = document.getElementById('filter');
	var value = select.options[select.selectedIndex].value;
	var input = document.querySelector("#valor");
	var texto = input.value;

	switch (value) {
		case 'id':    var num = parseInt(texto);
				      var filtrado = pessoas.filter(e => e.id == num);
				break;
		case 'nome':  var filtrado = pessoas.filter(e => e.nome == texto);
				break;
		case 'idade': var num = parseInt(texto);
				   	  var filtrado = pessoas.filter(e => e.idade == num);
				break;
		case 'salario': var num = parseInt(texto);
				   	  var filtrado = pessoas.filter(e => e.salario == num);
				break;
		case 'senioridade':  var filtrado = pessoas.filter(e => e.senioridade == texto);
				break;
		default:
			break;
	}
	console.log(filtrado);
    event.preventDefault();
}

function somaSalario(){
	const pessoas = [{ id:1, nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
					 { id:2, nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
					 { id:3, nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
					 { id:4, nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
					 { id:5, nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
					 { id:6, nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
					 { id:7, nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" }];
	const total = Object.values(pessoas).reduce((t, {salario}) => t + salario, 0)

	console.log(total)
    
}


function formata(){
	const dados =  [{nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'},
					{nome: 'Cláudio silva figueiredo ', cpf: '47187999887', telefone:'11988754092'},
					{nome: 'Juca da silva pereira', cpf: '79225578922', telefone:'53984252563'}];


	for (var i = 0; i < dados.length; i++) {
		vetobj = dados[i];
		var strnome = vetobj.nome.split(" ");
		var strcpf = vetobj.cpf;
		var strFone = vetobj.telefone;
		for (var j = 0; j < strnome.length; j++) {
			var subs = strnome[j];
			if(subs != ""){
				var capitalized = subs[0].toUpperCase() + subs.substr(1);
				var upperNome = upperNome+' '+capitalized;
				upperNome = upperNome.replace(/undefined/,'');
				uppeNome = upperNome.trim();
			}
		}
		
		console.log(upperNome);
		console.log(formataCPF(strcpf));
		console.log(formataTelefone(strFone));
		subs='';
		capitalized='';
		upperNome='';
	}
}


function formataCPF(cpf){
  //retira os caracteres indesejados...
  cpf = cpf.replace(/[^\d]/g, "");

  //realizar a formatação...
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function formataTelefone(telefone){
  //retira os caracteres indesejados...
  telefone = telefone.replace(/[^\d]/g, "");
  //realizar a formatação...
  if(telefone.length = 10){
  	return telefone.replace(/(\d{2})(\d{4})(\d{4})/, "($1)$2-$3");
  }else return telefone.replace(/(\d{2})(\d{3})(\d{3})/, "($1)$2-$3");
}


const cep = document.querySelector("#cep")

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}




cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu Erro: '+ e,message))
})
/*
Problema 04:
Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada
imprima o seu endereço no formato ‘ENDERECO, NUMERO, CIDADE/ESTADO’. Utilize a
fetch API para realizar a requisição.
*/