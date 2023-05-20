import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Circle } from "react-native-animated-spinkit";
import Modal from "react-native-modal";

interface Props {
    visible: boolean;
    onClose: () => void;
    result?: string;
}

const ModalForm: React.FC<Props> = ({ visible, onClose, result }) => {
    return (
        <Modal
            isVisible={visible}
            animationIn={"bounceIn"}
            animationOut={"bounceOut"}
            backdropOpacity={0.6}
        >
            <View style={styles.modalContent}>
                <View style={styles.modalBody}>
                    {result ? (
                        <Text style={{ marginBottom: 12, color: "#FFFFFF" }}>
                            {result.toString()}
                        </Text>
                    ) : (
                        <>
                            <Text
                                style={{ marginBottom: 12, color: "#FFFFFF" }}
                            >
                                Please wait...
                            </Text>
                            <Circle size={50} color="#FFFFFF" />
                        </>
                    )}
                </View>

                <View style={styles.modalFooter}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={onClose}
                    >
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        width: "100%",
        height: "auto",
        backgroundColor: "#121212",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    modalBody: {
        width: "100%",
        height: 140,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    modalFooter: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    closeButton: {
        backgroundColor: "#0d6efd",
        borderRadius: 4,
        width: 180,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    closeButtonText: {
        color: "#FFFFFF",
        fontSize: 14,
        textAlign: "center",
    },
});

export default ModalForm;
