import PasswordEncoderService from './PasswordEncoderService';

test('unit test password encoder', async () => {
  const passwordEncoder = new PasswordEncoderService();
  const plainPassword = 'password';
  const hashedPassword = await passwordEncoder.generate(plainPassword);

  const isMatch = await passwordEncoder.matches(plainPassword, hashedPassword);

  expect(isMatch).toEqual(true);
});
