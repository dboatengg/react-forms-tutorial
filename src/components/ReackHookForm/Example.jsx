import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="fullName" {...register("fullName")} />
      {/* <select name="fruits" {...register("fruits")}>
        <option value="mango">Mango</option>
        <option value="orange">Orange</option>
        <option value="pawpaw">Pawpaw</option>
      </select>

      <label htmlFor="vehicle1">
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          {...register("vehicle1")}
        />
        I Bike
      </label>
      <label htmlFor="vehicle2">
        <input
          type="checkbox"
          id="vehicle2"
          name="vehicle2"
          value="Benz"
          {...register("vehicle2")}
        />
        Benz
      </label> */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
