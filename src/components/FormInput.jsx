const FormInput = ({ label, type, name, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label className="label" htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        id={name}
        className={`input input-bordered ${size}`}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  )
}
export default FormInput
