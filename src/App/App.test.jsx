import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom'
import { Provider } from "react-redux";
import { beforeEach, describe, expect, it } from "vitest";
import { store } from "@/test/mocks/store";
import App from '@/App';

describe('App', () => {
  let result
  beforeEach(() => {
    result = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })

  it('should render without crashing', () => {
    expect(screen).toBeDefined()
  })

  it('should render the home page', () => {
    const element = screen.getByTestId('home-container')
    expect(element).toBeDefined()
  })
})
