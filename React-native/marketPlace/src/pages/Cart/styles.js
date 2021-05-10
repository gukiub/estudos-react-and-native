import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

export const ProductContainer = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 60px;
    border-radius: 20px;
    background-color: #e83f5b;
`;

export const ProductList = styled(FlatList)`
    flex: 1;
    padding: 30px 10px;
`;