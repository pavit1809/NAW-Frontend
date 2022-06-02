import { merge } from 'lodash';
import Card from './Card';
import Lists from './Lists';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import IconButton from './IconButton';
import Autocomplete from './Autocomplete';
import List from './List';
import Toolbar from './Toolbar';
import OutlinedInput from './OutlinedInput';
import FormControl from './FormControl';
import InputLabel from './InputLabel';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(
    Card(theme),
    Lists(theme),
    Paper(theme),
    Input(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    IconButton(theme),
    Autocomplete(theme),
    List(theme),
    Toolbar(theme),
    OutlinedInput(theme),
    FormControl(theme),
    InputLabel(theme),
  );
}
