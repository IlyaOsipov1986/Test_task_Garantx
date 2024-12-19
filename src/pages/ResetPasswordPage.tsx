import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { IAuth } from "../types/login.interface";

const ResetPasswordPage: React.FC = () => {

    const redirectLoginPage = useNavigate();

    const onFinish = (values: IAuth) => {
        notification.success({ message: `Пароль для пользователя ${values.login} успешно сброшен` });
        redirectLoginPage('/login'); // Переход на страницу логина
    };

    return (
        <div className="absolute w-full h-full bg-primary-ligthBlue">
            <div className="login-page-wrap">
                <h2 className="mb-2 text-s">Сброс пароля</h2>
                <Form onFinish={onFinish}>
                    <Form.Item
                        name="login"
                        rules={[{ required: true, message: 'Введите имя пользователя!' }]}>
                        <Input placeholder="Имя пользователя" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Введите новый пароль!' }]}>
                        <Input.Password placeholder="Новый пароль" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Сбросить пароль
                        </Button>
                    </Form.Item>
                </Form>       
            </div>
        </div>
    )
}

export default ResetPasswordPage;