import React, { useRef } from 'react';
import './form.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const formContactSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es requerido'),
    telephone: Yup.number().required('El telefono es requerido'),
    email: Yup.string().email('Formato de email invalido').required('El email es requerido'),
    message: Yup.string().required('El mensaje es requerido')
})



const FormContact = ({setToast}) => {


    const form = useRef()

    const initialValues = {
        name: '',
        telephone: '',
        email: '',
        message: ''
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={formContactSchema}
                onSubmit={async (values, {resetForm}) => {
                    console.log(values)
                    emailjs.sendForm('service_z6zoxp4', 'template_544y3jo', form.current, '8aLA7_AyPlEDgut11')
                        .then((result) => {
                            console.log(result.text);
                            setToast( toast.success('Mail enviado correctamente', {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            }))
                            resetForm()
                        }, (error) => {
                            console.log(error.text);
                            setToast(  toast.error('Error, intente nuevamente', {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            }))
                        });
                }}
            >

            {({values, touched, errors, isSubmitting}) => (
                <Form ref={form} className="contact-form">
                    <div className="form-group"> 
                        <label htmlFor='name'>Nombre</label>
                        <Field id='name' name='name' placeholder='Juan' type='text' className="contact-input"/>
                        {
                            errors.name && touched.name && (
                                <div className='errorMessage'>
                                    <ErrorMessage  name='name'></ErrorMessage>
                                </div>
                            )
                        }
                    </div>

                    <div className="form-group"> 
                        <label htmlFor='telephone'>Telefono</label>
                        <Field id='telephone' name='telephone' placeholder='2215234192' type='number' className="contact-input"/>
                        {
                            errors.telephone && touched.telephone && (
                                <div className='errorMessage' >
                                    <ErrorMessage name='telephone'></ErrorMessage>
                                </div>
                            )
                        }
                    </div>

                    <div className="form-group"> 
                        <label htmlFor='email'>Email</label>
                        <Field id='email' name='email' placeholder='juan@gmail.com' type='email' className="contact-input"/>
                        {
                            errors.email && touched.email && (
                                <div className='errorMessage'>
                                    <ErrorMessage  name='email'></ErrorMessage>
                                </div>
                            )
                        }
                    </div>

                    <div className="form-group"> 
                        <label htmlFor='message'>Mensaje</label>
                        <Field id='message' name='message' placeholder='Deje su consulta' type='textarea' className="contact-input"/>
                        {
                            errors.message && touched.message && (
                                <div className='errorMessage'>
                                    <ErrorMessage  name='message'></ErrorMessage>
                                </div>
                            )
                        }
                    </div>

                    <button type="submit" className="btn-contact">Enviar consulta</button>
                    {isSubmitting ? (<p>Enviando su consulta</p>) : null}
                </Form>
            ) }
            </Formik>
        </div>
    );
}

export default FormContact;
