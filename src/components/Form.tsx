import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import ModalForm from "./ModalForm";
import { makePrediction } from "../services/makePrediction";

const Form = (): JSX.Element => {
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [result, setResult] = useState<string>("");
    const [data, setData] = useState([]);

    const handleValidation = () => {
        setModalVisible(true);
        setIsButtonDisabled(true);
        setResult("");

        makePrediction()
            .then((response) => {
                console.log(response);
                setIsButtonDisabled(false);
                const pred = Math.random() * 100;
                if (pred > 50) {
                    console.log("YES");
                } else {
                    console.log("NO");
                }
                setResult(`The result is: ${pred.toString()} %`);
            })
            .catch((error) => {
                setIsButtonDisabled(false);
                setResult("An error occurred! Try Again Later.");
                console.log(error);
            });
    };
    return (
        <View style={styles.container}>
            <ModalForm
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                result={result}
            />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    placeholderTextColor="#ccc"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder="hypertension (0 NO or 1 YES)"
                    placeholderTextColor="#ccc"
                    keyboardType="numeric"
                    maxLength={1}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder="sex (0 M or 1 F)"
                    placeholderTextColor="#ccc"
                    keyboardType="numeric"
                    maxLength={1}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder="smoking (0 NO or 1 YES)"
                    placeholderTextColor="#ccc"
                    keyboardType="numeric"
                    maxLength={1}
                />
            </View>
            <TouchableOpacity
                style={[
                    styles.submitButton,
                    isButtonDisabled && styles.disabledButton,
                ]}
                onPress={handleValidation}
                disabled={isButtonDisabled}
            >
                <Text style={styles.submitButtonText}>Predict</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ebebeb",
    },
    inputView: {
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        color: "red",
    },
    input: {
        color: "#242424",
        width: "100%",
        height: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: "#0d6efd",
        padding: 15,
        margin: 5,
        borderRadius: 4,
        width: "80%",
    },
    disabledButton: {
        opacity: 0.5,
    },
    submitButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        textAlign: "center",
    },
});

export default Form;
