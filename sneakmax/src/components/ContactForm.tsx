import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// Определите интерфейс для данных формы
interface FormData {
    name: string;
    email: string;
}

const ContactForm: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    // Используйте SubmitHandler для типизации функции onSubmit
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        // Здесь вы можете отправить данные на сервер
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name:
                <input type="text" {...register('name', { required: true })} />
            </label>
            <label>
                Email:
                <input type="email" {...register('email', { required: true })} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
