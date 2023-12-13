import { Component, Prop, State, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @State() name: string;

  componentWillLoad() {
      fetch('https://api.github.com/users/ErvinLlojku')
        .then((response: Response) => response.json())
        .then(response => {
          this.name = response['name'];
        });
    }

  render() {
    return <div>Helldo, World! I'm {this.name}</div>;
  }
}
