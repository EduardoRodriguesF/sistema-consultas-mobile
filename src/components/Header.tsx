import { View, Text, StyleSheet } from "react-native";
import { Consulta } from "../interfaces/consulta";

type ConsultaCardProps = {
  consulta: Consulta;
  onConfirmar?: () => void;
  onCancelar?: () => void;
};

export default function Header({ consulta }: ConsultaCardProps) {
    return (
        <View style={styles.header}>
            <Text style={styles.titulo}>Sistema de Consultas</Text>
            <Text style={styles.subtitulo}>Consulta #{consulta.id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        marginBottom: 24,
    },
    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 18,
        color: "#fff",
        opacity: 0.9,
    }
})