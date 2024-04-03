import 'styled-components';
import { TTheme } from 'elui-react';

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
