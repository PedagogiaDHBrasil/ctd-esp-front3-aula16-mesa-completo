import React from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main>
      <h1>Cadastro blog de receitas</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Digite seu nome"
          {...register("name", { required: true })}
        />
        <p>{errors.name?.type === "required" && "Nome é obrigatório"}</p>

        <input
          type="email"
          placeholder="Digite seu email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <p>{errors.email?.type === "required" && "Digite um email"}</p>

        <select {...register("user", { required: true })}>
          <option value="">Selecionar...</option>
          <option value="Leitor">Leitor</option>
          <option value="Criador">Criador de artigos</option>
        </select>
        <p>
          {errors.user?.type === "required" && "Selecione o tipo de usuário"}
        </p>

        <div className="gender">
          <h3>Gênero</h3>
          <div>
            <input type="radio" value="Male" {...register("gender")} />
            <label>Masculino</label>
          </div>
          <div>
            <input type="radio" value="Female" {...register("gender")} />
            <label>Feminino</label>
          </div>
        </div>

        <input
          type="number"
          placeholder="Digite sua idade"
          {...register("age", { required: true, min: 1, max: 99 })}
        />
        <p>{errors.age?.type === "required" && "Idade é obrigatória"}</p>

        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password", { required: true })}
        />
        <p>{errors.password?.type === "required" && "Senha é obrigatória"}</p>

        <div className="checkbox">
          <input type="checkbox" {...register("term", { required: true })} />
          <label>Concordar com os termos</label>
        </div>

        <p>
          {errors.term?.type === "required" &&
            "Você deve concordar com os termos"}
        </p>

        <input type="submit" value="Cadastrar" />
      </form>
    </main>
  );
};

export default Home;
