#LIBS
from django.db                  import models
from django.utils               import timezone


class Paciente(models.Model):
    id      = models.AutoField(primary_key=True)
    codigo  = models.CharField(default='',blank=True,null=True,max_length=6)

    nome_completo = models.CharField(max_length=255)
    data_nascimento = models.DateField()
    genero = models.CharField(max_length=50)
    estado_civil = models.CharField(max_length=50)
    nacionalidade = models.CharField(max_length=100)
    cgc = models.CharField(max_length=50, unique=True)
    cep = models.CharField(max_length=20)
    endereco = models.CharField(max_length=255)
    numero = models.CharField(max_length=20)
    bairro = models.CharField(max_length=100)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=50)
    fixo = models.CharField(max_length=20, blank=True, null=True)
    celular = models.CharField(max_length=20)
    whatsapp = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(unique=True)
    plano_cuidados_medicos = models.TextField(blank=True, null=True)
    tratamentos_especificos = models.TextField(blank=True, null=True)
    acompanhamento_medico = models.TextField(blank=True, null=True)
    medico_responsavel = models.CharField(max_length=255, blank=True, null=True)
    convenio_medico = models.CharField(max_length=255, blank=True, null=True)
    condicao_saude_atual = models.TextField(blank=True, null=True)
    historico_doencas = models.TextField(blank=True, null=True)
    alergias = models.TextField(blank=True, null=True)
    medicamentos_em_uso = models.TextField(blank=True, null=True)
    historico_cirurgias = models.TextField(blank=True, null=True)
    ultima_vacina = models.CharField(max_length=255, blank=True, null=True)
    exames_recentes = models.TextField(blank=True, null=True)
    necessidades_nutricionais = models.TextField(blank=True, null=True)
    nivel_dependencia = models.CharField(max_length=50)
    fisioterapia = models.BooleanField(default=False)
    equipamentos_auxiliares = models.BooleanField(default=False)
    terapia_ocupacional = models.BooleanField(default=False)
    ajuda_locomocao = models.BooleanField(default=False)
    fraldas_cuidadores = models.BooleanField(default=False)
    cuidados_pessoais = models.TextField(blank=True, null=True)
    historico_familiar = models.TextField(blank=True, null=True)
    comportamento_agressivo = models.BooleanField(default=False)
    tratamento_psicologico = models.BooleanField(default=False)
    diagnostico_psicologico = models.TextField(blank=True, null=True)
    comportamento_emocional = models.TextField(blank=True, null=True)
    preferencias_habitos = models.TextField(blank=True, null=True)
    data_admissao = models.DateField(blank=True, null=True)
    data_alta = models.DateField(blank=True, null=True)
    pagamento = models.DecimalField(max_digits=10, decimal_places=2)
    data_pagamento = models.DateField()
    responsavel_pagamento = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateField(blank=True,null=True)

    class Meta:
        verbose_name_plural = "Pacientes"

    def __str__(self):
        return self.nome_completo
    
    def save(self, *args,**kwargs):
        self.updated_at = timezone.now()
        
        last_paciente = Paciente.objects.order_by('-id').first()
        next_number = int(last_paciente.codigo.split('P')[1]) + 1 if last_paciente else 1
        self.codigo = f"P{next_number:06}"
        
        super(Paciente, self).save(*args,**kwargs)

