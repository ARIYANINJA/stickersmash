import {useNavigation} from '@react-navigation/native';
import {useSWR} from '@xyypmusic/swr';
import {Alert} from 'react-native';
import {EntryQuery} from '../queries';

export function useEntry(id) {
  const navigation = useNavigation();
  const {data, error} = useSWR(id ? [EntryQuery, {id}] : null);

  if (error?.response['errors'][0]['code'] === 104) {
    Alert.alert('Алдаа', `${id} дугаартай бүртгэл олдсонгүй.`, [
      {text: 'OK', onPress: () => navigation.navigate('Home')},
    ]);
    return null;
  }

  return data;
}
