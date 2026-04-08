import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Especialidade } from './src/types/especialidade';
import { Medico } from './src/interfaces/medico';
import { Paciente } from './src/types/paciente';
import { useState } from 'react';
import { Consulta } from './src/interfaces/consulta';

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
        <View style={styles.header}>
          <Text style={styles.titulo}>Sistema de Consultas</Text>
          <Text style={styles.subtitulo}>Consulta #{consulta.id}</Text>
        </View>

        <View style={styles.card}>
          <View style={[
            styles.statusBadge,
            consulta.status === "confirmada" && styles.statusConfirmada,
            consulta.status === "cancelada" && styles.statusCancelada,
          ]}>
            <Text style={styles.statusTexto}>{consulta.status.toUpperCase()}</Text>
          </View>

          <View style={styles.secao}>
            <Text style={styles.label}>Médico</Text>
            <Text style={styles.valor}>{consulta.medico.nome}</Text>
            <Text style={styles.info}>CRM: {consulta.medico.crm}</Text>
            <Text style={styles.info}>{consulta.medico.especialidade.nome}</Text>
          </View>

          <View style={styles.secao}>
            <Text style={styles.label}>Paciente</Text>
            <Text style={styles.valor}>{consulta.paciente.nome}</Text>
            <Text style={styles.info}>CPF: {consulta.paciente.cpf}</Text>
            <Text style={styles.info}>Email: {consulta.paciente.email}</Text>
            <Text style={styles.info}>Tel: {consulta.paciente.telefone}</Text>
          </View>

          <View style={styles.secao}>
            <Text style={styles.label}>Dados da Consulta</Text>
            <Text style={styles.valor}>Data: {formatarData(consulta.data)}</Text>
            <Text style={styles.valor}>Valor: {formatarValor(consulta.valor)}</Text>
            {consulta.observacoes && (
              <Text style={styles.observacoes}>{consulta.observacoes}</Text>
            )}
          </View>

          <View style={styles.acoes}>
            {consulta.status === "agendada" && (
              <>
                <View style={styles.botaoContainer}>
                  
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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