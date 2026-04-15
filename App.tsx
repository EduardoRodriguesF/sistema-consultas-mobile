import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Especialidade } from './src/types/especialidade';
import { Medico } from './src/interfaces/medico';
import { Paciente } from './src/types/paciente';
import { useState } from 'react';
import { Consulta } from './src/interfaces/consulta';
import { ConsultaCard } from './src/components';
import Header from './src/components/Header';

const cardiologia: Especialidade = {
  id: 1,
  nome: "Cardiologia",
  descricao: "Cuidados com o coração",
}

const medico1: Medico = {
  id: 1,
  nome: "Dr. Roberto Silva",
  crm: "CRM12345",
  especialidade: cardiologia,
  ativo: true
}

const paciente1: Paciente = {
  id: 1,
  nome: "Carlos Andrade",
  cpf: "123.456.789-00",
  email: "carlos@email.com",
  telefone: "(11) 98765-4321"
}

export default function App() {
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    medico: medico1,
    paciente: paciente1,
    data: new Date(2026, 4, 7),
    valor: 350,
    status: "agendada",
    observacoes: "Consulta de rotina"
  })

  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada"
    })
  }

  function cancelarConsulta() {
    setConsulta({
      ...consulta,
      status: "cancelada"
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header consulta={consulta} />
        <ConsultaCard
          consulta={consulta}
          onConfirmar={confirmarConsulta}
          onCancelar={cancelarConsulta}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#79059C',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 40,
  },
  card: {
    backgroundColor: "#Fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5
  },
  statusBadge: {
    backgroundColor: "#FFA500",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
  },
  statusConfirmada: {
    backgroundColor: "#4CAF50",
  },
  statusCancelada: {
    backgroundColor: "#f44336",
  },
  statusTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12
  },
  secao: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0"
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#79059C",
    marginBottom: 8
  },
  valor: {
    fontSize: 18,
    color: "#333",
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  observacoes: {
    fontSize: 14,
    color: "#555",
    fontStyle: "italic",
    marginTop: 8,
  },
  acoes: {
    marginTop: 10
  },
  botaoContainer: {
    marginBottom: 12
  },
  mensagem: {
    backgroundColor: "#E8F5E9",
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#4CAF50"
  },
  mensagemCancelada: {
    backgroundColor: "#FFEBEE",
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#F44336",
  },
  mensagemTexto: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
    textAlign: "center"
  },
  rodape: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    lineHeight: 18,
  }
});

function formatarValor(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}

function formatarData(data: Date): string {
  return data.toLocaleString("pt-BR")
}