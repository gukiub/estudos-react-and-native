import React, { useState } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import FloatingCart from '../../components/FloatingCart';

import formatValue from '../../utils/formatValue';

import {
    Container,
    ProductContainer,
    ProductImage,
    ProductList,
    Product,
    ProductTitle,
    PriceContainer,
    ProductButton,
    ProductButtonText,
    ProductPrice
} from './styles';

export default function App() {
    const [products, setProducts] = useState([
        {
            id: '1',
            title: 'Assinatura Switch Online',
            image_url:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Nintendo_eShop_Switch_logo.svg/1200px-Nintendo_eShop_Switch_logo.svg.png',
            price: 150,
        },
        {
            id: '2',
            title: 'Créditos na PSN',
            image_url:
                'https://img.hype.games/cdn/15a233de-6b9c-4397-a4ae-40b7e3e6f43dpsn-store-logo.png',
            price: 540,
        },
        {
            id: '3',
            title: 'Créditos na PSN',
            image_url:
                'https://img.hype.games/cdn/15a233de-6b9c-4397-a4ae-40b7e3e6f43dpsn-store-logo.png',
            price: 540,
        },
    ]);
    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={<View />}
                    ListFooterComponentStyle={{ height: 80 }}
                    renderItem={({ item }) => (
                        <Product>
                            <ProductImage source={{ uri: item.image_url }} />
                            <ProductTitle>{item.title}</ProductTitle>
                            <PriceContainer>
                                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                                <ProductButton onPress={() => { }}>
                                    <ProductButtonText>Adicionar</ProductButtonText>
                                    <FeatherIcon size={30} name="plus-circle" color="#d1d7e9" />
                                </ProductButton>
                            </PriceContainer>
                        </Product>
                    )}
                />
            </ProductContainer>
            <FloatingCart />
        </Container>
    );
};