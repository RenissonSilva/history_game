import * as React from 'react';
import { Snackbar } from 'react-native-paper';

interface Props {
    title: string;
    visible: boolean;
    onDismissSnackBar: () => void;
}

export function Toast({ onDismissSnackBar, visible, title }: Props) {
    return (
        <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
            label: "Fechar",
            onPress: () => {
                // Do something
            },
        }}>
            {title}
        </Snackbar>
    )
}