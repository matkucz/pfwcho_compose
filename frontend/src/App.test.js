import { render, screen } from '@testing-library/react';
import App from './App';

test('renders descrpition', () => {
  render(<App />);
  const description = screen.getByText(/Program do obliczania/i);
  expect(description).toBeInTheDocument();
});

test('renders label', () => {
  render(<App />);
  const label = screen.getByLabelText(/Który element/i);
  expect(label).toBeInTheDocument();
});

test('renders button', () => {
  render(<App />);
  const button = screen.getByText(/Oblicz wartość/i);
  expect(button).toBeInTheDocument();
});

test('renders input', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Wprowadź/i);
  expect(input).toBeInTheDocument();
});

test('renders output', () => {
  render(<App />);
  const output = screen.getByText(/Wartość ciągu/i);
  expect(output).toBeInTheDocument();
});

