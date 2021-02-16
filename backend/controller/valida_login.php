<?php
	echo('passo 1');

	//variáveis que armazenam os valores do input
	$usuario = $_POST['login'];
	$senha   = $_POST['passwaord'];

	//chamando conexão com BD
	require '../database/conexao.php';

	//SELECT para validar o login
	$query = $conn->query("SELECT * FROM users WHERE login='$usuario' AND password='$senha' LIMIT 1");

	//Se a validação for FALSE, apresenta um ALERT e recarrega a pagina de login
	if (!$result=mysqli_fetch_assoc($query)) {
		//Mensagem de erro no login
		$_SESSION['loginErro'] = "Usuário ou senha inválido!";
		//Redireciona usuario para tela de login
		header("Location: http://localhost/");

	//Se a validação for TRUE, carrega a pagina HOME
	}else{
		// $_SESSION['usuarioSenha'] = $result['senha'];
		// $_SESSION['usuarioLogin'] = $result['login'];
		// $_SESSION['usuarioId']	  = $result['idUsuario'];
		header("Location: http://localhost/app");
	}
?>