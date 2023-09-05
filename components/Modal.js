import { Button, Modal as NewModal, StyleSheet, Text, View } from 'react-native'

const Modal = ({ modalVisible, onHandleDelete, aux, onHandleCancelar }) => {

    return (
        <NewModal visible={modalVisible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalTitle}>
                        <Text>ATENTION</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text>`Estas seguro de eliminar este elemnto {aux}?</Text>
                    </View>
                    <View style={styles.modalButton}>
                        <Button title="confirmar" onPress={onHandleDelete} color={"#75AADB"} />
                    </View>
                    <View style={styles.modalButton}>
                        <Button title="cancelar" onPress={onHandleCancelar} color={"red"} />
                    </View>
                </View>
            </View>
        </NewModal>
    )
}

export default Modal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalContent: {
        backgroundColor: '#FCBF49',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#FCBF49',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    modalTitle: {
        color: '#fff',
        fontSize: 18,
    },
    modalMessage: {
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalButton: {
        marginTop: 15,
    },
})