declare class PasswordEncoderService {
    generate(password: string): Promise<string>;
    matches(passwordPlain: string, passwordHash: string): Promise<boolean>;
}
export default PasswordEncoderService;
