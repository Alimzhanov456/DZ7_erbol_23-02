import React from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationForm.css';

function RegistrationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className="RegistrationForm" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="fullName">ФИО:</label>
                <input
                    type="text"
                    id="fullName"
                    {...register('fullName', { required: true })}
                />
                {errors.fullName && <span>Пожалуйста, заполните это поле</span>}
            </div>
            <div>
                <label htmlFor="firstName">Имя:</label>
                <input
                    type="text"
                    id="firstName"
                    {...register('firstName', { required: true })}
                />
                {errors.firstName && <span>Пожалуйста, заполните это поле</span>}
            </div>
            <div>
                <label htmlFor="gender">Пол:</label>
                <select id="gender" {...register('gender', { required: true })}>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                    <option value="other">Другой</option>
                </select>
                {errors.gender && <span>Пожалуйста, выберите пол</span>}
            </div>
            <div>
                <label htmlFor="birthYear">Год рождения:</label>
                <input
                    type="number"
                    id="birthYear"
                    {...register('birthYear', { required: true, min: 1900, max: 2023 })}
                />
                {errors.birthYear && (
                    <span>
            Пожалуйста, введите год рождения между 1900 и 2023 годами
          </span>
                )}
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
}

export default RegistrationForm;

