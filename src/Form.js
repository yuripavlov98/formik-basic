import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const CustomForm = () => {

	return (
		<Formik
			initialValues =
			{{
				name: "",
				email: "",
				amount: 0,
				currency: "",
				text: "",
				terms: false,
			}}
			validationSchema = {Yup.object({
				name: Yup.string()
					.min(2, "Минимум 2 символа")
					.required("Обязательное поле"),
				email: Yup.string()
					.email("Неправильный email адрес")
					.required("Обязательное поле"),
				amount: Yup.number()
					.min(5, "Не менее 5")
					.required("Обязательное поле"),
				currency: Yup.string().required("Выберите валюту"),
				text: Yup.string().min(10, "Не менее 10 символов"),
				terms: Yup.boolean()
					.required("Необходимо согласие")
					.oneOf([true], "Необходимо согласие"),
			})}
			onSubmit = {(values) => console.log(JSON.stringify(values, null, 2))}
			>
			<Form className='form'>
				<h2>Formik</h2>
				<label htmlFor='name'>Ваше имя</label>
				<Field
					id='name'
					name='name'
					type='text'
				/>
				<ErrorMessage className='error' name="name" component="div"/>
				<label htmlFor='email'>Ваша почта</label>
				<Field
					id='email'
					name='email'
					type='email'
				/>
				<ErrorMessage className='error' name="email" component="div"/>
				<label htmlFor='amount'>Количество</label>
				<Field
					id='amount'
					name='amount'
					type='number'
				/>
				<ErrorMessage className='error' name="amount" component="div"/>
				<label htmlFor='currency'>Валюта</label>
				<Field
					id='currency'
					name='currency'
					as='select'
				>
					<option value=''>Выберите валюту</option>
					<option value='USD'>USD</option>
					<option value='UAH'>UAH</option>
					<option value='RUB'>RUB</option>
				</Field>
				<ErrorMessage className='error' name="currency" component="div"/>
				<label htmlFor='text'>Ваше сообщение</label>
				<textarea
					id='text'
					name='text'
					as='textarea'
				/>
				<ErrorMessage className='error' name="text" component="div"/>
				<label className='checkbox'>
					<input
						name='terms'
						type='checkbox'
					/>
					Согласен (согласна) с политикой конфиденциальности
				</label>
				<ErrorMessage className='error' name="terms" component="div"/>
				<button type='submit'>Отправить</button>
			</Form>
		</Formik>
	);
};

export default CustomForm;
