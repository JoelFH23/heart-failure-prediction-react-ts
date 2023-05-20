import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import ModalForm from "./ModalForm";
import { makePrediction } from "../services/makePrediction";

interface FormFields {
    age: number;
    diabetes: string;
    high_blood_pressure: string;
    sex: string;
    smoking: string;
}

const initialValues = {
    age: 0,
    diabetes: "",
    high_blood_pressure: "",
    sex: "",
    smoking: "",
};

const Form = (): JSX.Element => {
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [result, setResult] = useState<string>("");
    const [fields, setFields] = useState<FormFields>(initialValues);

    const handleValidation = () => {
        setResult("");
        if (
            fields.age === 0 ||
            fields.diabetes === "" ||
            fields.high_blood_pressure === "" ||
            fields.sex === "" ||
            fields.smoking === ""
        ) {
            Alert.alert("Some fields are empty");
        } else {
            handleSubmit();
        }
    };
    const handleSubmit = () => {
        setModalVisible(true);
        setIsButtonDisabled(true);
        console.log(fields);
        fields.age = parseInt(fields.age);
        makePrediction([fields])
            .then((response) => {
                const pred: number = response[0]["Prediction"];
                setIsButtonDisabled(false);
                if (pred === 0) {
                    setResult(`Prediction: NO`);
                } else {
                    setResult(`Prediction: YES`);
                }
                console.log(`Prediction: ${pred}`);
            })
            .catch((error) => {
                setIsButtonDisabled(false);
                setResult("An error occurred! Try Again Later.");
                console.error(error);
            });
    };
    const handleChange = (field: keyof FormFields, value: string) => {
        setFields((prevState) => ({
            ...prevState,
            [field]: value,
        }));
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
                    onChangeText={(value) => handleChange("age", value)}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.inputView}>
                <Picker
                    style={styles.picker}
                    selectedValue={fields.diabetes}
                    onValueChange={(value) => handleChange("diabetes", value)}
                >
                    <Picker.Item label="Diabetes" value="" />
                    <Picker.Item label="YES" value={1} />
                    <Picker.Item label="NO" value={0} />
                </Picker>
            </View>

            <View style={styles.inputView}>
                <Picker
                    style={styles.picker}
                    selectedValue={fields.high_blood_pressure}
                    onValueChange={(value) =>
                        handleChange("high_blood_pressure", value)
                    }
                >
                    <Picker.Item label="Hypertension" value="" />
                    <Picker.Item label="YES" value={1} />
                    <Picker.Item label="NO" value={0} />
                </Picker>
            </View>

            <View style={styles.inputView}>
                <Picker
                    style={styles.picker}
                    selectedValue={fields.sex}
                    onValueChange={(value) => handleChange("sex", value)}
                >
                    <Picker.Item label="Select Sex" value="" />
                    <Picker.Item label="Male" value={1} />
                    <Picker.Item label="Female" value={0} />
                </Picker>
            </View>

            <View style={styles.inputView}>
                <Picker
                    style={styles.picker}
                    selectedValue={fields.smoking}
                    onValueChange={(value) => handleChange("smoking", value)}
                >
                    <Picker.Item label="Smoking" value="" />
                    <Picker.Item label="YES" value={1} />
                    <Picker.Item label="NO" value={0} />
                </Picker>
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
        backgroundColor: "#000000",
    },
    content: {
        backgroundColor: "#121212",
        width: "100%",
        height: "80%",
    },
    inputView: {
        backgroundColor: "#121212",
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        borderRadius: 4,
    },
    input: {
        color: "#FFFFFF",
        width: "100%",
        height: "100%",
        padding: 10,
        borderWidth: 1,
        fontSize: 16,
        paddingLeft: 14,
        /* borderColor: "#ccc", */
        marginBottom: 10,
    },
    picker: {
        color: "#FFFFFF",
        height: "100%",
        width: "100%",
        borderColor: "gray",
        borderWidth: 1 /* 
        marginVertical: 10,
        paddingHorizontal: 10, */,
    },
    submitButton: {
        /* backgroundColor: "#0d6efd", */
        backgroundColor: "#3700B3",
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
