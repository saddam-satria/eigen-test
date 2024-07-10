class ErrorException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Base Error';
  }
}

export default ErrorException;
