import moment from 'moment';
import 'moment/locale/vi';

moment.locale('vi');

export function parseShortTime(time: string) {
  return moment(new Date(time)).format('DD.MM.YYYY');
}
