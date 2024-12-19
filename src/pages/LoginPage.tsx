import { Button, Checkbox, Form, Input, notification } from 'antd';
import { useAuth } from '../utils/hooks/useAuth';
import { IAuth } from '../types/login.interface';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage: React.FC = () => {
    const { setIsAuth } = useAuth();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const redirectMainPage = useNavigate();

    const handleLogin = (values: IAuth) => {
        if (values.login === 'admin' && values.password === 'admin') {
            setErrorMessage('');
            setLoading(true);
            setIsAuth({login: values.login, loggedIn: true});
            setTimeout(() => {
                notification.success({ message: 'Успешный вход в систему' });
                setLoading(false);
                redirectMainPage('/');
            }, 1000);
        } else {
            setErrorMessage('Неверный логин или пароль');
        }
    };

return (
        <div className="absolute w-full h-full bg-primary-ligthBlue">
            <div className="login-page-wrap">
                <Form
                    layout="vertical"
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleLogin}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Имя пользователя"
                        name="login"
                        rules={[
                            {
                                required: true,
                                message: 'Введите имя пользователя',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Введите пароль',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{width:'100%', minHeight: '42px'}} loading={loading}>
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
                {errorMessage && 
                    <p className="mb-3 text-sm text-red-500">
                        {errorMessage}
                    </p>
                }
                <div className="text-sm">
                    <Link to="/reset-password" style={{color: '#1677ff'}}>Сбросить пароль</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;